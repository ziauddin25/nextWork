import { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: {
    department: string;
    title: string;
  };
};

type UsersResponse = {
  users: User[];
};

function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [refreshCount, setRefreshCount] = useState(0);

  // Fetch logic comes here.
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
        setLoading(true);
        setError(null);

        try {
        const response = await fetch(
            "https://dummyjson.com/users",
            { signal: controller.signal }
        );

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const data: UsersResponse = await response.json();

        setUsers(data.users);
        } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
            return;
        }

        setError(
            err instanceof Error ? err.message : "Something went wrong."
        );
        } finally {
        if (!controller.signal.aborted) {
            setLoading(false);
        }
        }
    }

    fetchUsers();

    return () => {
        controller.abort();
    };
    }, [refreshCount]);

    const departments = [
        "All",
        ...new Set(users.map((user) => user.company.department)),
    ];

    const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;

    const matchesSearch =
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
            department === "All" ||
            user.company.department === department;

        return matchesSearch && matchesDepartment;
    });


  return (
  <main>
    <h1>User Dashboard</h1>

    <div>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search name or email..."
      />

      <select
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      >
        {departments.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => setRefreshCount((count) => count + 1)}
        disabled={loading}
      >
        {loading ? "Refreshing..." : "Refresh"}
      </button>
    </div>

    {loading && <p>Loading users...</p>}

    {!loading && error && (
      <div role="alert">
        <p>{error}</p>
        <button
          type="button"
          onClick={() => setRefreshCount((count) => count + 1)}
        >
          Try again
        </button>
      </div>
    )}

    {!loading && !error && users.length === 0 && (
      <p>No users available.</p>
    )}

    {!loading && !error && users.length > 0 &&
      filteredUsers.length === 0 && (
        <p>No users match your search or filter.</p>
      )}

    {!loading && !error && filteredUsers.length > 0 && (
      <section>
        <p>Showing {filteredUsers.length} users</p>

        {filteredUsers.map((user) => (
          <article key={user.id}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
            <p>{user.company.title}</p>
            <p>{user.company.department}</p>
          </article>
        ))}
      </section>
    )}
  </main>
);
}

export default UserDashboard;
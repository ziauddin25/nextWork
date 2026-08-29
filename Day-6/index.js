const userData = {
    id: "usr_2026_99x",
    firstName: "Zayan",
    lastName: "Ahmed",
    age: 25,
    gender: "Male",
    avatar: "https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    bio: null,
    contact: {
        email: "zayan.dev@gmail.com",
        // phone: "+8801700000000",
        address: {
            street: "Mirpur-10",
            city: "Dhaka",
            country: "Bangladesh"
        }
    },
    socials: {
        github: "zayan-codes",
        twitter: "@zayan_tweets"
    },
    role: "premium_user",
    lastLogin: "2026-08-28T22:15:00Z",
    ipAddress: "192.168.1.50"
};

// 1.destructuring && rest
const {id, ...othersData} = userData;
const {firstName, lastName, age, gender, avatar, socials,} = userData;
const finalName = firstName + ' ' + lastName;
console.log(finalName);

//2.spread && computed

const spread = userData.contact;
const property = 'newRole';
const newSpread = {
    ...spread,
    [property]: 'Frontend Developer',
    phone: '09206989'
};
console.log(newSpread);


// 4.optional chaining
console.log(userData.socials.facebook?.idLink);

// 5.nullish coalescing
const bioData = othersData.bio?? 'No bio available!';
console.log(bioData);


// 6.profileData 

const profileData = {
    id,
    finalName,
    age,
    gender,
    avatar,
    socials,
    newSpread,
    bioData,
}

console.log(profileData);

const nameEl = document.getElementById('name-el');
const ageEl = document.getElementById('age-el');
const genderEl = document.getElementById('gender-el');
const avatarEl = document.getElementById('avatar-el');
const socialsEl = document.getElementById('socials-el');
const emailEl = document.getElementById('email-el');
const bioDataEl = document.getElementById('bioData-el');
const roleEl = document.getElementById('role-el');
const addressEl = document.getElementById('address-el');

function profileDetails () {
    if (profileData.avatar) {
        avatarEl.src = profileData.avatar;
    } else {
        avatarEl.src = 'No profile img!';
    }

    nameEl.textContent = profileData.finalName;
    emailEl.textContent = profileData.newSpread.email;
    roleEl.textContent = profileData.newSpread.newRole;
    ageEl.textContent = profileData.age + ' years old';
    genderEl.textContent = profileData.gender;
    socialsEl.textContent = profileData.socials.twitter;
    bioDataEl.textContent = profileData.bioData;
    addressEl.textContent = `${profileData.newSpread.address.street} ${profileData.newSpread.address.city} ${profileData.newSpread.address.country}`;
}

profileDetails();

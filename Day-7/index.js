document.addEventListener('DOMContentLoaded', function() {

    const modalContent = document.getElementById('modal-main');
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');

    openModal.addEventListener('click', ()=> {
        modalContent.showModal();
        cancelEdit.style.display = 'none';
        // console.log('modal is open!');
        
    });

    closeModal.addEventListener('click', ()=> {
        resetModal();
        modalContent.close();
    });

    const cancelEdit = document.getElementById('cancel-btn');
    cancelEdit.addEventListener('click', () => {
        resetModal();
        modalContent.close();
    });

    function resetModal () {
        titleData = '';
        subTitleData = '';
        progressData = '';

        modalTitle.value = '';
        modalSubTitle.value = '';
        selectTask.value = 'High';

        editTaskId = null;
        createTask.textContent = 'Create Task';
    };

    const modalTitle = document.getElementById('modal-title');
    const modalSubTitle =document.getElementById('modal-subTitle');
    const selectTask = document.getElementById('select-task');

    let titleData = '';
    modalTitle.addEventListener('input', (e)=> {
        // console.log('title text:', e.target.value);
        titleData = e.target.value;

    });
    
    let subTitleData = '';
    modalSubTitle.addEventListener('input', (e)=> {
        subTitleData = e.target.value;
    });

    let progressData = '';
    selectTask.addEventListener('change', (e)=> {
        progressData = e.target.value;
        
    });

    const pendingTask = document.getElementById('pending-task');
    pendingTask.addEventListener('click', ()=> {
        renderTasks();
    });

    const completeTask = document.getElementById('completed-task');
    completeTask.addEventListener('click', ()=> {
        completedTasks();
    });

    const allCards = document.getElementById('all-cards');
    const localData = localStorage.getItem('tasks');
    const cardData = localData?JSON.parse(localData) : [];
    renderTasks();
    // console.log('cardData:', cardData);

    const allClearBtn = document.querySelector('.all-clear');

    allClearBtn.addEventListener('click', ()=> {
        localStorage.clear();
        
        allCards.innerHTML = '';

        // console.log('all tasks are parmentally remove!');
        
    });

    function showToast () {
        const toastMain =document.getElementById('toast-container');
        const toast = document.createElement('span');
        toast.classList.add('toast');
        toast.textContent = '🎉 Task Completed Successfully!';

        toastMain.append(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    };

    let editTaskId = null;
    // const comTasks = localStorage.getItem('cmTasks');
    // const completedTask = localStorage?JSON.parse(comTasks) : [];
    // console.log('completed Tasks:', completedTask);
    
    function createCard(task) {
        const card = document.createElement('div');
        card.classList.add('todo-card');
        card.dataset.id = task.id;
        
        const cardHead = document.createElement('div');
        cardHead.classList.add('card-head');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = task.titleData;

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        const completeIcon = document.createElement('i');
        completeIcon.classList.add('fa-solid', 'fa-check');
        completeBtn.append(completeIcon);
        
        completeBtn.addEventListener('click', (e)=> {
            const comElement = e.target.closest('.todo-card');
            const taskId = Number(comElement.dataset.id);
            const task = cardData.find((card) => card.id === taskId);
            if (task) {
                task.status = 'completed';
                localStorage.setItem('tasks', JSON.stringify(cardData));

                renderTasks();
                showToast();
            }
        });

        const cardSubTitle = document.createElement('p');
        cardSubTitle.classList.add('card-subTitle')
        cardSubTitle.textContent = task.subTitleData;

        const cardBtns = document.createElement('div');
        cardBtns.classList.add('card-btns');

        const btns = document.createElement('div');
        btns.classList.add('btns');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        editBtn.addEventListener('click', (e)=> {
            const cardElement = e.target.closest('.todo-card');
            // console.log(cardElement);
            
            const cardId = Number(cardElement.dataset.id);
            // console.log(cardId);

            const cardUpdate = cardData.find((card)=> card.id === cardId);
            // console.log(cardUpdate);

            editTaskId = cardId;
            modalTitle.value = cardUpdate.titleData;
            modalSubTitle.value = cardUpdate.subTitleData;
            selectTask.value = cardUpdate.progressData;

            createTask.textContent = 'Save';
            modalContent.showModal();

            cancelEdit.style.display = 'block';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-trash');
        deleteBtn.append(icon);

        deleteBtn.addEventListener('click', (e)=> {
            const taskElement = e.target.closest('.todo-card');
            const taskId = Number(taskElement.dataset.id);

            const updatedTasks = cardData.filter((task) => task.id !== taskId);

            cardData.length = 0;
            cardData.push(...updatedTasks);

            localStorage.setItem('tasks', JSON.stringify(cardData))
            
            taskElement.remove();
        });
       
        const cardProgress = document.createElement('span');
        cardProgress.classList.add('card-progress');
        cardProgress.textContent = task.progressData;

        // added all card data:
        cardHead.append(cardTitle, completeBtn);
        btns.append(editBtn, deleteBtn);
        cardBtns.append(cardProgress,btns );
        card.append(cardHead, cardSubTitle, cardBtns);

         if (task.status === 'completed') {
            editBtn.remove();
            completeBtn.remove();
        };

        return card;
    };

    const findTask = document.getElementById('find-task');
    findTask.addEventListener('input', (e)=> {
        const taskCall = e.target.value;
        const taskFind = cardData.filter((item)=> {
            return item.titleData.toLowerCase().includes(taskCall.toLowerCase());
        });

        if (pendingTask.classList.contains('active')) {
            renderTasks(taskFind);
        } if (completeTask.classList.contains('active')) {
            completedTasks(taskFind);  
        }
    });

    function renderTasks (tasks = cardData) {
        const pendingTasks = tasks.filter(task => task.status !== 'completed');
        allCards.innerHTML = '';

        pendingTask.classList.add('active');
        completeTask.classList.remove('active');

        if (pendingTasks.length === 0) {
            const noTask = document.createElement('p');
            noTask.classList.add('no-task');
            noTask.textContent = 'No task!';
            allCards.append(noTask);

        };

        pendingTasks.forEach(task => {
            const card = createCard(task);
            
            allCards.append(card);
        });

    };

    function completedTasks (tasks = cardData) {
        const completedTasks = tasks.filter(task => task.status == 'completed');

        allCards.innerHTML = '';

        pendingTask.classList.remove('active');
        completeTask.classList.add('active');

        if (completedTasks.length === 0) {
            const noTask = document.createElement('p');
            noTask.classList.add('no-task');
            noTask.textContent = 'No task!';
            allCards.append(noTask);
        };

        completedTasks.forEach(task => {
            const card = createCard(task);

            allCards.append(card);
        });
    };



    // function taskValid () {
    //     const titleValid = titleData.trim();
    //     if (titleValid === '') {
    //         sh
    //     }

    //     const subTitleValid = subTitleData.trim();
    //     if (subTitleValid === '') {
    //         console.error('lol data de!');
    //     }
    // }

    const createTask = document.getElementById('create-task');
    createTask.addEventListener('click', ()=> {
        if (editTaskId !== null) {
            const task = cardData.find((task)=> task.id === editTaskId);

            task.titleData = modalTitle.value;
            task.subTitleData = modalSubTitle.value;
            task.progressData = selectTask.value;

            localStorage.setItem('tasks', JSON.stringify(cardData));
            renderTasks();
            resetModal();

            modalContent.close();
        } else {
            const taskData = {
                id: Date.now(),
                titleData: titleData,
                subTitleData: subTitleData,
                progressData: progressData,
                status: 'pending'
            };
            

            cardData.push(taskData);
            localStorage.setItem('tasks', JSON.stringify(cardData));
            JSON.parse(localStorage.getItem('tasks'));
            // console.log('saveData', saveData);
            // console.log(cardData);
            renderTasks();

            resetModal();
            modalContent.close();
        }
    });

});
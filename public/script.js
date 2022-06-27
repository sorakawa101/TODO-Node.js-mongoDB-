const tasksDOM = document.querySelector(".tasks");

// /api/v1/tasksからタスクを読み込む
const showTasks = async () => {
    try {
        // 自作のAPIを叩く
        const { data: tasks } = await axios.get("/api/v1/tasks");

        // タスクを出力
        const allTasks = tasks.map((task) => {
            const { completed, _id, name } = task;

            return `<div class="single-task">
            <h5>
                <span><i class="fas fa-check-circle"></i></span>${name}
            </h5>
            <div class="task-links">
                <!-- 編集リンク -->
                <a href="#" class="edit-link">
                    <i class="fas fa-edit"></i>
                </a>
                <!-- ゴミ箱リンク -->
                <a href="#" class="delete-btn">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </div>
        </div>`;
        }).join("");
        tasksDOM.innerHTML = allTasks;
    } catch(err) {
        console.log(err);
    }
};

showTasks();
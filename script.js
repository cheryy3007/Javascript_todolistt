const button = document.getElementById("send");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const btn = document.getElementById("daynight");
const editButtonText = "🖊";
const deleteButtonText = "🗑"; 
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
button.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.classList.add("li-element");
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn">${editButtonText}</button>
                <button class="delete-btn">${deleteButtonText}</button>
            </div>
        `;
        taskList.appendChild(li); 
        input.value = "";
        li.querySelector(".edit-btn").addEventListener("click", () => {
            const newText = prompt("Измените текст:", taskText);
            if (newText) {
                li.querySelector("span").textContent = newText;
            }
        });
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    }
});

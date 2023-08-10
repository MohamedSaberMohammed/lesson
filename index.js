// document.querySelector("#input").addEventListener("keydown", (event) => {
//   if(event.key === "Enter"){
//     const input = document.querySelector("#input");
//     addItem(input.value);
//   }
    
// });

// document.querySelector("#add_item").addEventListener("click", () => {
//   const input = document.querySelector("#input");
//   addItem(input.value);
// });

// addItem = (input) => {
//   const item = document.createElement("div");
//   const div = document.createElement("div");
//   const checkIcon = document.createElement("i");
//   const trashIcon = document.createElement("i");
//   const text = document.createElement("p");

//   item.className = "item";
//   text.textContent = input;

//   checkIcon.className = "fas fa-check-square";
//   checkIcon.style.color = "lightgray";
//   checkIcon.addEventListener("click", () => {
//     checkIcon.style.color = "limegreen";
//   })
//   div.appendChild(checkIcon);

//   trashIcon.className = "fas fa-trash";
//   trashIcon.style.color = "darkgray";
//   trashIcon.addEventListener("click", () => {
//     item.remove();
//   })
//   div.appendChild(trashIcon);

//   item.appendChild(text);
//   item.appendChild(div);

//   document.querySelector("#to_do_list").appendChild(item);
//   document.querySelector("#input").value = "";
// }

// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add_item");
  const inputField = document.getElementById("input");
  const todoList = document.getElementById("to_do_list");

  // إضافة الوظيفة عند النقر على زر الإضافة
  addButton.addEventListener("click", function() {
    const inputValue = inputField.value;
    if (inputValue.trim() !== "") {
      const newItem = createTodoItem(inputValue);
      todoList.appendChild(newItem);
      inputField.value = "";
    }
  });

  // إضافة الوظيفة عند الضغط على مفتاح "Enter"
  inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const inputValue = inputField.value;
      if (inputValue.trim() !== "") {
        const newItem = createTodoItem(inputValue);
        todoList.appendChild(newItem);
        inputField.value = "";
      }
    }
  });

  // دالة لإنشاء عنصر جديد في قائمة المهام
  function createTodoItem(text) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const textDiv = document.createElement("div");
    textDiv.textContent = text;
    itemDiv.appendChild(textDiv);

    const dateDiv = document.createElement("div");
    const currentDate = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    dateDiv.textContent = formattedDate;
    itemDiv.appendChild(dateDiv);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    deleteIcon.addEventListener("click", function() {
      itemDiv.remove();
    });
    itemDiv.appendChild(deleteIcon);

    return itemDiv;
  }
});

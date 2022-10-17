let input = document.querySelector("#task")
let submit = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")

// Load items
loadItems()

// Done it
var list = document.querySelector('ul')
list.addEventListener('click', function (check) {
    if (check.target.tagName === 'LI') {
        check.target.classList.toggle('checked')
    }
})

// Add new element
submit.addEventListener("click", () => {
    if (input.value) {
        loadStorage(input.value)
        const listItem = document.createElement("li")
        const valueItem = document.createElement('span');
        const deleteItem = document.createElement("span")
        deleteItem.classList.add("close");
        deleteItem.innerHTML = "X"
        valueItem.classList.add('value');
        valueItem.innerHTML = input.value
        listItem.append(valueItem);
        listItem.append(deleteItem)
        listDOM.append(listItem)
        input.value = ""

        deleteItem.onclick = function (e) { deleteElement(e); }
        $(".success").toast("show");
    } else {
        $(".error").toast("show");

    }
})

function deleteElement(e) {
    let parent = e.target.parentElement;
    console.log(parent);
    let value = parent.getElementsByClassName('value')[0].textContent.trim();
    dltStorage(value);
    parent.remove()
}

// Set item to Local Storage
function loadStorage(text) {
    let str = JSON.parse(localStorage.getItem("todo"))
    let toDos;
    if (str == null) {
        toDos = []
    } else {
        toDos = getStorage()
    }
    toDos.push(text)
    localStorage.setItem("todo", JSON.stringify(toDos))
}

function getStorage() {
    let toDo = JSON.parse(localStorage.getItem("todo"))
    return toDo;
}

// Get items From Local Storage
function loadItems() {
    let toDo = getStorage();
    console.log(toDo);
    if (toDo != null) {
        let html
        for (let i = 0; i < toDo.length; i++) {
            html = `<li>
            <span class="value">${toDo[i]}</span>
            <span class="close">X</span>
            </li>`
            listDOM.innerHTML += html
        }
    }
}

// Delete items from Local Storage
function dltStorage(text) {
    let toDo = getStorage()
    toDo.forEach((element, id) => {
        if (element === text) {
            toDo.splice(id, 1);
        }
    })
    localStorage.setItem("todo", JSON.stringify(toDo))
}

(function () {
    // Deleting to-do processes
    var close = document.getElementsByClassName("close")
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = (e) => deleteByElement(e);
    }
})();
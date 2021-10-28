class Task {
    $container
    $checkbox
    $content
    $btnDelete
    constructor(input) {
        this.$container = document.createElement("div")
        this.$container.classList.add("task")

        this.$checkbox = document.createElement("input")
        this.$checkbox.type = "checkbox"
        this.$checkbox.className = "cb"
        this.$checkbox.addEventListener("click", () => {
            const title = document.getElementById("title")
                // const number = document.getElementById("number")
                // console.log(number);
                // var dem = number;
            if (this.$checkbox.checked) {
                // dem--
                // if (number > dem) {
                //     title.innerHTML = "All tasks are done"
                // }
                title.innerHTML = "All tasks are done"
            } else {
                title.innerHTML = `There is ${number} task to complete`
            }
        })

        this.$content = document.createElement("span")
        this.$content.innerHTML = input

        this.$btnDelete = document.createElement("button")
        this.$btnDelete.innerHTML = "Delete"
        this.$btnDelete.addEventListener("click", () => {
            console.log("chào");
            if (this.$checkbox.checked) {
                this.$container.remove()
            }
        })
    }

    render() {
        const cnt = document.createElement("div")
        cnt.classList.add("cnt")
        cnt.appendChild(this.$checkbox)
        cnt.appendChild(this.$content)

        this.$container.appendChild(cnt)
        this.$container.appendChild(this.$btnDelete)

        return this.$container
    }
}
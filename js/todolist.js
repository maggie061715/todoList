angular.module("todoApp", [])
    .controller("TodolistController", function() {
        this.title = "Todolist";
        this.todos = [
            { text: "Todo1", expansion: true, list: [{ text: "代辦事項1", done: true }, { text: "代辦事項2", done: false }], del: false },
            { text: "Todo2", expansion: false, list: [{ text: "代辦事項1", done: false }, { text: "代辦事項2", done: true }], del: false },
            { text: "Todo3", expansion: false, list: [{ text: "代辦事項1", done: false }, { text: "代辦事項2", done: false }], del: false }
        ];
        this.showList = function(todo) {
            todo.expansion = !todo.expansion;
        };
        this.check = function(todo) {
            var num = 0;
            var list = todo.list;
            list.forEach(function(item) {
                if (item.done) {
                    num += 1;
                }
            })
            console.log(num)
            if (num == list.length) {
                todo.del = true;
            } else {
                todo.del = false;

            }
        };
        this.remaining = function() {
            var count = 0;
            angular.forEach(this.todos, function(todo) {
                count += todo.del ? 0 : 1;
            });
            return count;
        };
    })
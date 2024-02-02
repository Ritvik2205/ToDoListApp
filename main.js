$(document).ready(function() {
    $('#add-task').click(function() {
        var task = $('#new-task').val().trim();
        if(task !== '') {
            var listItem = $('<div class="todo-item"></div>').text(task);
            var deleteButton = $('<button>Done</button>').click(function() {
                $(this).parent().remove();
            });
            listItem.append(deleteButton);
            $('#todo-list').append(listItem);
            $('#new-task').val('');
        }
    });
});
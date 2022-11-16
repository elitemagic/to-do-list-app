function newItem(){
// Add a new item to list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

// Error msg for no entry
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    $('#list').append(li);
    }

// Strikethrough item on list once completed - Dbl click
    function crossOut() {
        li.toggleClass("strike");
    }
    
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

// Add button to item to remove it
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    li.addClass("delete")
    }

// Add ability to reorder the list - drag and drop
    $('#list').sortable();
}
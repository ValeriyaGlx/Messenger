var chatConteiner = document.querySelector('.chat-content')
var newMessage = document.querySelector('.chat-form')
var enterField =  newMessage.querySelector('.chat-form-input')
var newTemplate = document.querySelector('#message-template').content

var newTemplateText = newTemplate.querySelector('.chat-message')


newMessage.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var taskText = enterField.value
  var cloneMessage = newTemplateText.cloneNode(true)
  var taskDescription = cloneMessage.querySelector('p')

  setTimeout(function(){
  taskDescription.textContent = taskText
  chatConteiner.appendChild(cloneMessage)
  deleteMessage(cloneMessage)}, 100)
  enterField.value = ''
  }) 
  
  
var deleteMessage = function(item){
var deleteButton = item.querySelector('.chat-message-button')

deleteButton.addEventListener('click', function () {

setTimeout(function(){ item.remove()}, 10)
  
  })

}

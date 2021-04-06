$(function() {
    $('.change-devour').on('click', function(event) {
      event.preventDefault();
      const id = $(this).data('id');
      const newDevour = $(this).data('newdevour');
  
      const newDevouredState = {
        devoured: newDevour,
      };
  
     
      $.ajax(`/api/burgers/${id}`, {
        type: 'PUT',
        data: newDevouredState,
      }).then(function() {
        console.log('changed devoured to', newDevour);
        location.reload();
      });
    });
  
    $('.create-form').on('submit', function(event) {
      
      event.preventDefault();
  
      const burgerValue = $('#burger').val().trim();
       
   
        const newBurger = {
          burger: burgerValue,
          devoured: false,
        };
      
       
        $.ajax('/api/burgers', {
          type: 'POST',
          data: newBurger,
        }).then(function() {
          console.log('created new burger');
        
          location.reload();
        });
      }
    );
  
   

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
  
      const burgerValue = $('#br').val().trim();
       
   
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
  
   
    $('.delete-burger').on('click', function(event) {
      const id = $(this).data('id');
  
    
      $.ajax(`/api/burgers/${id}`, {
        type: 'DELETE',
      }).then(function() {
        console.log('deleted burger', id);
        
        location.reload();
      });
    });
  });
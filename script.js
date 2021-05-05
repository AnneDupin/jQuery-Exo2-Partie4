var countNumber = function() {
    var totalNumber = 0;
    $('.number').each( function(index,item) { // .index() Search for a given element from among the matched elements.
        //Iterate over a jQuery object, executing a function for each matched element.
      totalNumber += parseInt($(item).html());
    }); 
    //parseInt : The parseInt is used to convert the string or other value into number, when we get the value from the text box it is in string format, so if we trying to add the value without convert to integer value it just add the value as string (35+66=3566), so we must convert it to integer.
    $('.total_nb').html(totalNumber);
  }
  
  countNumber();
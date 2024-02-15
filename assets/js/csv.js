let input = document.querySelector('input[type="file"]');

input.addEventListener('change', function() {
  let reader = new FileReader();
  reader.onload = function() {
    let lines = reader.result.split('\n').map(function(line){
      return line.split(',');
    });
    console.log(lines);
  }
  reader.readAsText(input.files[0]);
}, false);
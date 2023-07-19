
var today = dayjs();
$('#weekDay').text(today.format('MMMM D'));

var dayWeek = today.format('dddd,');
$('#currentDay').text(dayWeek);

var today = dayjs();

$(function () {
    var currentHour = dayjs().format("HH")
    console.log (currentHour)
    var timeblock = document.querySelectorAll('.time-block')
    for (let i = 0; i < timeblock.length; i++) {
      
      var timeblockid = timeblock[i].id.substring(5)
      console.log (timeblockid)
      if (timeblockid==currentHour){
        timeblock[i].classList.add('present')
      }
      if (timeblockid<currentHour){
        timeblock[i].classList.add('past')
      }
      if (timeblockid>currentHour){
        timeblock[i].classList.add('future')
      }
  
    }
$ ('.saveBtn').on('click',function(){
  console.log($(this).siblings('textarea').val())
  console.log($(this).parent('div').attr('id'))
  localStorage.setItem($(this).parent('div').attr('id'),$(this).siblings('textarea').val())
})
  
var textblocks =  $('.description')
for (let i = 0; i < textblocks.length; i++) {
$(textblocks[i]).val(localStorage.getItem($(textblocks[i]).parent('div').attr('id')))
  
}
        
  });
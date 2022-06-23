document.querySelector('#check').addEventListener('click', days)

function days(){
  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday") {
    alert('We have Class')
  }else if(day === "saturday" || day === "sunday") {
    alert('Weekend')}
    else if(day === "friday") {
      alert('Club Tonight!!')}
    else{
      alert('Boring day!!')
    }
}
 const tagsEl = document.querySelector('.tags')
 const textarea = document.querySelector('.textarea')

 textarea.focus()

 textarea.addEventListener('keyup',(event)=>{
     createTags(event.target.value)

     if (event.key ==='Enter'){
         setTimeout(() => {
             event.target.value = ' '
             textarea.placeholder="Enter your choices here..."
         }, 10);

         randomSelect()
     }
 })

 function createTags(input){
     const tags = input.split(',') //Splitting the entered strings by a comma separator
     .filter(tag =>tag.trim()!== '') //filtering out empty strings
     .map(tag=> tag.trim()) // mapping the tag strings without whitespaces at the end
     
     tagsEl.innerHTML = ''

     tags.forEach(tag =>{
         const tagEl = document.createElement('span')
         tagEl.classList.add('tag')
         tagEl.innerText = tag
         tagsEl.appendChild(tagEl)
     })
 }

 function randomSelect(){
     const times = 20

     const interval = setInterval(() => {
         const randomTag= pickRandomTag()

         highlightTag(randomTag)
         setTimeout(() => {
             unHighlightTag(randomTag)
         }, 100);
     }, 100);
    
     setTimeout(() => {
         clearInterval(interval)

         setTimeout(() => {
             const randomTag = pickRandomTag()
             highlightTag(randomTag)
         }, 100);
     }, times * 100);
 }

 function pickRandomTag(){
     const tags = document.querySelectorAll('.tag')
     return tags[Math.floor(Math.random()* tags.length)]
 }

 function highlightTag(tag){
     tag.classList.add('highlight')
 }

 function unHighlightTag(tag){
     tag.classList.remove('highlight')
 }
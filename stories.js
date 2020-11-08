// Add text in title and buttons 
headline.textContent = 'Mad Libs'

//  Targeting elements
const $buttons = document.getElementById('buttons')
const $mission = document.getElementById('mission')
const $lunch = document.getElementById('lunch')
const $weather = document.getElementById('weather')
const $titles = document.getElementById('titles')


function addButtons(){
  $buttons.innerHTML = `
     <div id='titles'>
      <h1 id='choose'>Choose a story</h1>     
      <button id='mission'>Mission Statement</button>
      <button id='lunch'>Lunch Room!</button>
      <button id='weather'>Weather Report</button> 
      </div>
  `
}

addButtons()
document.getElementById('mission').addEventListener('click',function(){
  addForm('mission')
})

document.getElementById('lunch').addEventListener('click',function(){
  addForm('lunch')
})
document.getElementById('weather').addEventListener('click',function(){
  addForm('weather')
})


// carete forms' array
const forms = [
  `
    <h1>Provide the following words.</h1>
    <form id='formMission'> 
      <input type="text" name="Adjective" placeholder="Adjective">
      <input type="text" name="Verb1" placeholder="Verb1">
      <input type="text" name="Verb2" placeholder="Verb2">
      <input type="text" name="Plural Noun 1" placeholder="Plural Noun 1">
      <input type="text" name="Plural Noun 2" placeholder="Plural Noun 2">
      <input type="text" name="Plural Noun 3" placeholder="Plural Noun 3"><br>
      <button id='read' type="submit">Read Story</button>     
    </form>
  `
  ,
  `
  <form id='formLunch'>
  <h1>Provide the following words.</h1>
  <input type="text" name="Animal" placeholder="Animal">
  <input type="text" name="Adjective 1" placeholder="Adjective 1">
  <input type="text" name="Adjective 2" placeholder="Adjective 2">
  <input type="text" name="Vegetable 1" placeholder="Vegetable 1">
  <input type="text" name="Vegetable 2" placeholder="Vegetable 2">
  <input type="text" name="Noun" placeholder="Noun">
  <input type="text" name="Container" placeholder="Container">
  <br>
  <button id='read' type="submit">Read Story</button>     
  </form>
  `,
  `
  <form id='formWeather'>
  <h1>Provide the following words.</h1>
  <input type="text" name="Adjective 1" placeholder="Adjective 1">
  <input type="text" name="Adjective 2" placeholder="Adjective 2">
  <input type="text" name="Article of Clothing" placeholder="Article of Clothing">
  <input type="text" name="Number 1" placeholder="Number 1">
  <input type="text" name="Number 2" placeholder="Number 2">
  <input type="text" name="Plural Noun 1" placeholder="Plural Noun 1">
  <input type="text" name="Plural Noun 2" placeholder="Plural Noun 2">
  <br>
  <button id='read' type="submit">Read Story</button>     
  </form>
  `
  
]

// create stories' array

const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]

// create new story button 
const finished = 
  `
  <p>Story is finished!</p>
  <button id='new-story'>Create Another Story</button>
  `

// use event listner to make difffrent stories. 
function addForm(type){
    
  if (type ==='mission'){
      
    document.getElementById('titles').innerHTML = forms[0]
    let form = document.getElementById('formMission')
    document.getElementById('formMission').addEventListener('submit',function(event){
      event.preventDefault()
      let wordObjectExample = {
          'Adjective':form.elements[0].value,
          'Verb 1':form.elements[1].value,
          'Verb 2':form.elements[2].value,
          'Plural Noun 1':form.elements[3].value,
          'Plural Noun 2':form.elements[4].value,
          'Plural Noun 3':form.elements[5].value
      }
      
      document.getElementById('titles').innerHTML = stories[0].output(wordObjectExample) +  finished
      document.getElementById('new-story').addEventListener('click',function(){
        location.reload();
        return false;
      })     
    
    })
   
    
  }

  else if (type ==='lunch'){
    document.getElementById('titles').innerHTML = forms[1]
    let form = document.getElementById('formLunch')
    document.getElementById('formLunch').addEventListener('submit',function(event){
      event.preventDefault()
      let wordObjectExample = {
        'Animal':form.elements[0].value,
        'Adjective 1':form.elements[1].value,
        'Adjective 2':form.elements[2].value,
        'Vegetable 1':form.elements[3].value,
        'Vegetable 2':form.elements[4].value,
        'Noun':form.elements[5].value,
        'Container':form.elements[6].value      
    }
      document.getElementById('titles').innerHTML =stories[1].output(wordObjectExample) + finished    
      document.getElementById('new-story').addEventListener('click',function(){
        location.reload();
        return false;
      })
  
    })

  }

  else if (type ==='weather'){
    document.getElementById('titles').innerHTML = forms[2]
    let form = document.getElementById('formWeather')
    document.getElementById('formWeather').addEventListener('submit',function(event){
      event.preventDefault()
      let wordObjectExample = {
        'Adjective 1':form.elements[1].value,
        'Adjective 2':form.elements[2].value,
        'Article of Clothing':form.elements[3].value,
        'Number 1':form.elements[4].value,
        'Number 2':form.elements[5].value,
        'Plural Noun 1':form.elements[6].value,
        'Plural Noun 2':form.elements[7].value    
      }
      document.getElementById('formWeather').innerHTML = stories[2].output(wordObjectExample)  +  finished
    
      document.getElementById('new-story').addEventListener('click',function(){
        location.reload();
        return false;
      })
  
    })

  }

}







// console.log(stories)
// for (const word of stories[0].words) {
//   console.log(word)
// }




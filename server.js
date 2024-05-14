import express from 'express'
import fetchJson from './helpers/fetch-json.js'

const app = express(),
apiUrl = 'https://fdnd-agency.directus.app/items',
scores = apiUrl + '/hf_scores',
sdgData = await fetchJson(apiUrl + '/hf_sdgs')
// sdgChosen = []

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
// console.log(sdgData.data)

// get index
app.get('/', (request, response) =>  {
  fetchJson(apiUrl + '/hf_sdgs').then((sdgData) =>{
	  response.render('index', {
    sdgs: sdgData.data
    })
  })
})

app.get('/dashboard', (request, response) => {
  response.render('dashboard')
})

app.get('/score', (request, response) => {
  response.render('score')
})

app.post('/score', (request, response) =>{
  fetchJson(scores).then((sdgChosen) => {
    sdgChosen.data.push(request.body)
  })
  console.log(request.body)
  response.redirect(303, '/score')
})



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8001)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
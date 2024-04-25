import express from 'express'
import fetchJson from './helpers/fetch-json.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

let sdgChosen = []

const apiUrl = 'https://fdnd-agency.directus.app/items'
const sdgData = await fetchJson(apiUrl + '/hf_sdgs')
// console.log(sdgData.data)

app.get('/', (request, response) =>  {
    fetchJson(apiUrl + '/hf_sdgs').then((sdgData) =>{
	response.render('index', {
        sdgs: sdgData.data

    })
})
})
app.post('/', (request, response) =>{
  console.log(request.body)
  response.redirect(303, '/')
})


// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8001)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
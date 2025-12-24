async function getMostViewed() {
  try {
    const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=L4zsx0SqPxPECXdy0WSiAQA9xjoDBy9eYHx1iMF3AP1FtQFQ')
    const json = await response.json()
    console.log(json)

    const articleContainer = document.querySelector('#articles-container')
    const newsContentResults = json.results
    articleContainer.textContent = ""

    newsContentResults.forEach((article)=>{
        let newsContentResultsElement = document.createElement('div')
        newsContentResultsElement.innerHTML = `
        <a href=${article.url} target="_blank"><h1>${article.title}</h1></a>
        <img src="${article.media?.[0]?.['media-metadata']?.[2]?.url || ''}">
        <p>${article.abstract}</p>
        <p>Автор: ${article.byline}</p>
        <p>Дата: ${article.published_date}</p>
        <p>Раздел: ${article.section}</p>
        `

        articleContainer.append(newsContentResultsElement)
    })

  } catch (error) {
    console.error(error)
  }
}

getMostViewed()
       
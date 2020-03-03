import React, { useState } from 'react'

import articleImgOne from '../../../public/images/article-1.jpg'
import articleImgTwo from '../../../public/images/article-2.png'
import articleImgThree from '../../../public/images/article-3.png'
import articleImgFour from '../../../public/images/article-4.png'

import NewsItem from './NewsItem'

const News = () => {
  const [articles] = useState([
    {
      articleId: 1,
      articleImg: articleImgOne,
      articleTitle:
        'Verdensballetten på Møllerup Gods lørdag d. 13. Juli 2019 blev en skøn aften',
      articleContent:
        'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020',
      articleLink: 'Læs mere here'
    },
    {
      articleId: 2,
      articleImg: articleImgTwo,
      articleTitle: 'Køb vores hampeprodukter',
      articleContent:
        'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen...',
      articleLink: 'Køb online her'
    },
    {
      articleId: 3,
      articleImg: articleImgThree,
      articleTitle: 'Verdensballetten 2019',
      articleContent:
        'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland.',
      articleLink: 'Se mere her'
    },
    {
      articleId: 4,
      articleImg: articleImgFour,
      articleTitle: 'Historien om Møllerup Gods',
      articleContent:
        'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.',
      articleLink: 'Læs historien her'
    }
  ])
  return (
    <section className="news">
      <NewsItem articles={articles} />
    </section>
  )
}

export default News

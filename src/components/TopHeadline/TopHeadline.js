import React, { useEffect, useState } from 'react';


const TopHeadline = () => {
    
const [articles, setArticle] = useState([]);

    useEffect(() =>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3c4e53b3a45a4401aeb8500b5a0cb1ad';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticle(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;
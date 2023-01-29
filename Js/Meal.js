const SearchFood = () => {
    const SearchFiled = document.getElementById('search-filed');
    const searchText = SearchFiled.value;
    
     SearchFiled.value = '';

     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`;
    
       fetch(url)
      .then(res => res.json())
      .then(data => DisplayResultMeals(data.meals));
}
const DisplayResultMeals = (meals)=>{
    const searchResult = document.getElementById('searchResult');
    meals.forEach(meal =>{
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="col">
                <div class="card">
                <img src="${meal.strMealThumb
                }" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title"> ${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
            </div>
      </div>
        
        `;
        searchResult.appendChild(div);
    })
}
const SearchFood = () => {
    const SearchFiled = document.getElementById('search-filed');
    const searchText = SearchFiled.value;
    
     SearchFiled.value = '';

     if(searchText == ''){

        alert("please Search  the Food name");
     }

   else{

      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`;

    //   const res = await fetch(url);
    //   const data = await res.json();
    //   DisplayResultMeals(data.meals)

            fetch(url)
                .then(res => res.json())
                .then(data => DisplayResultMeals(data.meals));
   }
}
const DisplayResultMeals = (meals)=>{
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent= ' ';
    meals.forEach(meal =>{
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="col">
                <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb
                }" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title"> ${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
            </div>
      </div>
        
        `;
        searchResult.appendChild(div);
        
    })
}
const loadMealDetail = async mealId =>{
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json()
    DisplaMealDetails(data.meals[0])


    // fetch(url)
    // .then (res => res.json())
    // .then ( data => DisplaMealDetails(data.meals[0]));

}
const DisplaMealDetails = meal => {
    console.log(meal);
    const mealDetils = document.getElementById('meal-details');
    mealDetils.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`

    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
             <a href="${meal.strYoutube
             }" class="btn btn-primary">Go somewhere</a>
        </div>
    
    `;
    mealDetils.appendChild(div);
}

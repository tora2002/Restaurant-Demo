import React, { useState, Image } from 'react';
import './Group.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import FilterButton from '../../components/FilterButton/FilterButton';
import { Icon } from '@iconify/react';

function Group() {
    const navigate = useNavigate();
    const [filterBtnStyles, setFilterBtnStyles] = useState(Array.from( {length: 5}, () => false));
    const [cuisineClicked, setCuisineClicked] = useState(Array.from( {length: 6}, () => false));
    const [priceClicked, setPriceClicked] = useState(Array.from( {length: 3}, () => false ));
    const [dietClicked, setDietClicked] = useState(Array.from( {length: 6}, () => false));
    const [mealClicked, setMealclicked] = useState(Array.from( {length: 6}, () => false));

    const handleSingleBtnColor = (arr, setArr, index) => {
        const newBtnStyles = arr.map((value, currIndex) => {
          return currIndex === index ? true : false;
        });
        setArr(newBtnStyles);
    };

    const handleMultiClick = (arr, setArr, index) => {
        const newMultiClick = [...arr];
        newMultiClick[index] = !arr[index];
        setArr(newMultiClick);
    };

    const cuisineCards = () => {
        return (
            <div className='cuisineCardsContainer'>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>Mexican</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 0)}
                        onFilter={cuisineClicked[0]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>American</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 1)}
                        onFilter={cuisineClicked[1]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>Chinese</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 2)}
                        onFilter={cuisineClicked[2]}
                        />
                    </div>
                </div>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>Japanese</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 3)}
                        onFilter={cuisineClicked[3]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>Korean</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 4)}
                        onFilter={cuisineClicked[4]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div className='cuisineContent'>
                                <p>Mediterranean</p>
                                <div className='cuisineImg'></div>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, 5)}
                        onFilter={cuisineClicked[5]}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const priceRangeCards = () => {
        return (
            <div className='cuisineRowContainer'>
                <div className='smallIndividualCard'>
                    <FilterButton content={
                        <div>
                            <p>&lt; $15</p>
                        </div>
                    } 
                    onClickHandler={() => handleSingleBtnColor(priceClicked, setPriceClicked, 0)}
                    onFilter={priceClicked[0]}
                    />
                </div>
                <div className='smallIndividualCard'>
                    <FilterButton content={
                        <div>
                            <p>$15 - $25</p>
                        </div>
                    } 
                    onClickHandler={() => handleSingleBtnColor(priceClicked, setPriceClicked, 1)}
                    onFilter={priceClicked[1]}
                    />
                </div>
                <div className='smallIndividualCard'>
                    <FilterButton content={
                        <div>
                            <p>$25 &gt;</p>
                        </div>
                    } 
                    onClickHandler={() => handleSingleBtnColor(priceClicked, setPriceClicked, 2)}
                    onFilter={priceClicked[2]}
                    />
                </div>
            </div>
        );
    };

    const allergensCards = () => {
        return (
            <div className='cuisineCardsContainer'>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Vegetarian</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 0)}
                        onFilter={dietClicked[0]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Vegan</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 1)}
                        onFilter={dietClicked[1]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Dairy / Gluten free</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 2)}
                        onFilter={dietClicked[2]}
                        />
                    </div>
                </div>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Nuts</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 3)}
                        onFilter={dietClicked[3]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Eggs</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 4)}
                        onFilter={dietClicked[4]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Soy</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, 5)}
                        onFilter={dietClicked[5]}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const mealCards = () => {
        return (
            <div className='cuisineCardsContainer'>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Breakfast</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 0)}
                        onFilter={mealClicked[0]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Lunch</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 1)}
                        onFilter={mealClicked[1]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Dinner</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 2)}
                        onFilter={mealClicked[2]}
                        />
                    </div>
                </div>
                <div className='cuisineRowContainer'>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Brunch</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 3)}
                        onFilter={mealClicked[3]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Snack</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 4)}
                        onFilter={mealClicked[4]}
                        />
                    </div>
                    <div className='cuisineIndividualCard'>
                        <FilterButton content={
                            <div>
                                <p>Dessert</p>
                            </div>
                        } 
                        onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, 5)}
                        onFilter={mealClicked[5]}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className='group-hero'>
                <h1 className='group-title'>Choose your preferences and create your group</h1>
                <div className='group-cards'>
                    <div className='leftCardContainer'>
                        <Card content={
                            <div className='leftCardContent'>
                                <div className='group-filters'>
                                    <div className='filter'>
                                        <Card content={
                                            <Icon fontSize={30} icon='material-symbols:filter-list-rounded' color='black' />
                                        }
                                        isFloating={true}
                                        />
                                    </div>
                                    <div className='cuisine'>
                                        <FilterButton content={
                                            <p>Cuisine</p>
                                        } 
                                        onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, 0)}
                                        onFilter={filterBtnStyles[0]}
                                        />
                                    </div>
                                    <div className='priceRange'>
                                        <FilterButton content={
                                            <p>Price Range</p>
                                        } 
                                        onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, 1)}
                                        onFilter={filterBtnStyles[1]}
                                        />
                                    </div>
                                    <div className='allergens'>
                                        <FilterButton content={
                                            <p>Diet and Allergens</p>
                                        } 
                                        onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, 2)}
                                        onFilter={filterBtnStyles[2]}
                                        />
                                    </div>
                                    <div className='mealType'>
                                        <FilterButton content={
                                            <p>Meal Type</p>
                                        } 
                                        onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, 3)}
                                        onFilter={filterBtnStyles[3]}
                                        />
                                    </div>
                                </div>
                                {filterBtnStyles[0] ? cuisineCards() : null}
                                {filterBtnStyles[1] ? priceRangeCards() : null}
                                {filterBtnStyles[2] ? allergensCards() : null}
                                {filterBtnStyles[3] ? mealCards() : null}
                            </div>
                        }/>
                    </div>
                    <div className='rightCardContainer'>
                        <Card content={
                            <div className='rightCardContent'>
                                <h2 className='groupMemberTitle'>Group members: </h2>
                                <div className='memberProfile'>
                                    <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
                                    <p className='memberName'>Plexie</p>
                                </div>
                                <div className='memberProfile'>
                                    <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
                                    <p className='memberName'>Aneri the Amazing and Admirable</p>
                                </div>
                                <div className='memberProfile'>
                                    <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
                                    <p className='memberName'>Jerm Yoo</p>
                                </div>
                                <div className='memberProfile'>
                                    <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
                                    <p className='memberName'>Tye Tye</p>
                                </div>
                                <div className='memberProfile'>
                                    <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
                                    <p className='memberName'>Shaamer aka Mr. Worldwide</p>
                                </div>
                            </div>
                        }/>
                    </div>
                </div>
                <div className='group-cards'>
                    <div className='bottomCardContainer'>
                        <Card content={
                            <div className='bottomCardContent'>
                                <button className='generateLink'>Generate Group Link: </button>
                                <div className='bottomCardTemplate'></div>
                            </div>
                        }/>
                    </div>
                    <div className='bottomRightButtonContainer'><Button text={
                        <p>Ready to swipe!</p>
                    }
                    onClickHandler={() => navigate("/swipe")}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Group;

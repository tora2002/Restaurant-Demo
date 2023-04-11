import React, { useState, Image } from 'react';
import './Group.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import FilterButton from '../../components/FilterButton/FilterButton';
import MemberInfo from '../../components/MemberInfo/MemberInfo';
import { Icon } from '@iconify/react';

function Group() {
    const navigate = useNavigate();
    const [filterBtnStyles, setFilterBtnStyles] = useState(Array.from( {length: 5}, () => false));
    const [cuisineClicked, setCuisineClicked] = useState(Array.from( {length: 6}, () => false));
    const [priceClicked, setPriceClicked] = useState(Array.from( {length: 3}, () => false ));
    const [dietClicked, setDietClicked] = useState(Array.from( {length: 6}, () => false));
    const [mealClicked, setMealclicked] = useState(Array.from( {length: 6}, () => false));
    
    const members = [
        { name: 'Plexie' },
        { name: 'Aneri the Amazing and Admirable' },
        { name: 'Jerm Yoo' },
        { name: 'Tye Tye' },
        { name: 'Shaamer aka Mr. Worlwide' },
    ];

    const filters = [
        { 
            type: 'Cuisine',
            className: 'cuisine',
        },
        { 
            type: 'Price Range',
            className: 'price-range',
        },
        { 
            type: 'Diet and Allergens',
            className: 'allergens',
        },
        { 
            type: 'Meal Type',
            className: 'meal-type',
        },
    ];

    const cuisines = [
        { 
            type: 'Mexican',
            img: 'mexican-food-img',
        },
        { 
            type: 'American',
            img: 'american-food-img',
        },
        { 
            type: 'Chinese',
            img: 'chinese-food-img',
        },
        { 
            type: 'Japanese',
            img: 'japanese-food-img',
        },
        { 
            type: 'Korean',
            img: 'korean-food-img',
        },
        { 
            type: 'Indian',
            img: 'indian-food-img',
        },
    ];

    const priceRanges = [
        { amount: '&lt; $15' },
        { amount: '$15 - $25' },
        { amount: '$25 &gt;' },
    ];

    const allergens = [
        { 
            type: 'Vegetarian',
            img: '',
        },
        { 
            type: 'Vegan',
            img: '',
        },
        { 
            type: 'Dairy / Gluten free',
            img: '',
        },
        { 
            type: 'Nuts',
            img: '',
        },
        { 
            type: 'Eggs',
            img: '',
        },
        { 
            type: 'Soy',
            img: '',
        },
    ];

    const meals = [
        { 
            type: 'Breakfast',
            img: '',
        },
        { 
            type: 'Lunch',
            img: '',
        },
        { 
            type: 'Dinner',
            img: '',
        },
        { 
            type: 'Brunch',
            img: '',
        },
        { 
            type: 'Snack',
            img: '',
        },
        { 
            type: 'Dessert',
            img: '',
        },
    ];

    const handleSingleBtnColor = (arr, setArr, index) => {
        const newBtnStyles = arr.map((value, currIndex) => currIndex === index ? true : false);
        setArr(newBtnStyles);
    };

    const handleMultiClick = (arr, setArr, index) => {
        const newMultiClick = [...arr];
        newMultiClick[index] = !arr[index];
        setArr(newMultiClick);
    };

    const groupMembers = () => {
        return (
            <div className='right-card-content'>
                <h2 className='group-member-title'>Group members: </h2>
                {members.map((member, index) => (
                    <MemberInfo key={index} name={member.name} />
                ))}
            </div>
        );
    };

    const cuisineIndividualCards = cuisines.map((cuisine, index) => (
        <div className='cuisine-individual-card'>
            <FilterButton content={
                <div className='cuisine-content'>
                    <p>{cuisine.type}</p>
                    <div className={cuisine.img}></div>
                </div>
                } 
            onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, index)}
            onFilter={cuisineClicked[index]}
            />
        </div>
    ));

    const cuisineCards = () => {
        return (
            <div className='cuisine-cards-container'>
                <div className='cuisine-row-container'>
                    {cuisineIndividualCards.slice(0, cuisineIndividualCards.length/2)}
                </div>
                <div className='cuisine-row-container'>
                    {cuisineIndividualCards.slice(cuisineIndividualCards.length/2)}
                </div>
            </div>
        );
    };

    const priceRangeCards = () => {
        return (
            <div className='cuisine-row-container'>
                {priceRanges.map((priceRange, index) => (
                    <div className='small-individual-card'>
                        <FilterButton content={
                            <div>
                                <p>{priceRange.amount}</p>
                            </div>
                            } 
                        onClickHandler={() => handleSingleBtnColor(priceClicked, setPriceClicked, index)}
                        onFilter={priceClicked[index]}
                        />
                    </div>
                ))}
            </div>
        );
    };

    const allergensIndividualCards = allergens.map((allergen, index) => (
        <div className='cuisine-individual-card'>
            <FilterButton content={
                <div>
                    <p>{allergen.type}</p>
                </div>
                } 
                onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, index)}
                onFilter={dietClicked[index]}
            />
        </div>
    ));

    const allergensCards = () => {
        return (
            <div className='cuisine-cards-container'>
                <div className='cuisine-row-container'>
                    {allergensIndividualCards.slice(0, allergensIndividualCards.length/2)}
                </div>
                <div className='cuisine-row-container'>
                    {allergensIndividualCards.slice(allergensIndividualCards.length/2)}
                </div>
            </div>
        );
    };

    const mealsIndividualCards = meals.map((meal, index) => (
        <div className='cuisine-individual-card'>
            <FilterButton content={
                <div>
                    <p>{meal.type}</p>
                </div>
                } 
                onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, index)}
                onFilter={mealClicked[index]}
                />
        </div>
    ));

    const mealCards = () => {
        return (
            <div className='cuisine-cards-container'>
                <div className='cuisine-row-container'>
                    {mealsIndividualCards.slice(0, mealsIndividualCards.length/2)}
                </div>
                <div className='cuisine-row-container'>
                    {mealsIndividualCards.slice(mealsIndividualCards.length/2)}
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
                    <div className='left-card-container'>
                        <Card content={
                            <div className='left-card-content'>
                                <div className='group-filters'>
                                    <div className='filter'>
                                        <Card content={
                                            <Icon fontSize={30} icon='material-symbols:filter-list-rounded' color='black' />
                                        }
                                        isFloating={true}
                                        />
                                    </div>
                                    {filters.map((filter, index) => (
                                        <div className={filter.className}>
                                            <FilterButton content={
                                                <p>{filter.type}</p>
                                            } 
                                            onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, index)}
                                            onFilter={filterBtnStyles[index]}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {filterBtnStyles[0] ? cuisineCards() : null}
                                {filterBtnStyles[1] ? priceRangeCards() : null}
                                {filterBtnStyles[2] ? allergensCards() : null}
                                {filterBtnStyles[3] ? mealCards() : null}
                            </div>
                        }/>
                    </div>
                    <div className='right-card-container'>
                        <Card content={
                            groupMembers()
                        }/>
                    </div>
                </div>
                <div className='group-cards'>
                    <div className='bottom-card-container'>
                        <Card content={
                            <div className='bottom-card-content'>
                                <button className='generate-link'>Generate Group Link: </button>
                                <div className='bottom-card-template'></div>
                            </div>
                        }/>
                    </div>
                    <div className='bottom-right-button-container'><Button text={
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

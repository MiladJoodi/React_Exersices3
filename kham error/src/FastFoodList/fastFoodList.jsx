import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({fastFoodItems})=>{

    return(
        <div className="row">
            {fastFoodItems.map(fastfood=>{
                return(
                    <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.id}>
                        <FastFoodItem {...fastfood} />
                    </div>
                )
            })}
        </div>
    )
}

export default FastFoodList;
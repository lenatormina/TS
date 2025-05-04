interface TotalPrice{
    price: number
    discount: number
    isInstallment?: boolean
    months: number
}

const totalPrice  = (props: TotalPrice): number => {
    const {price, discount, isInstallment, months} = props;
     let offPrice = price - (price * (discount / 100))
     if(!isInstallment){
         return offPrice
     }
     return offPrice / months
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 
const contactAlert = () => {
    alert("Thanks for telling us your issue, we'll get back to you ASAP!");
}

const signupAlert = () => {
    alert("Thanks for signing up! You can go back to the home page now. Happy ordering!");
}

const goToConfirmPage = (foodName, orderTime, imageName) => {
    window.location.href = `./order.html?food=${encodeURIComponent(foodName)}&time=${encodeURIComponent(orderTime)}&image=${encodeURIComponent(imageName)}`;
};

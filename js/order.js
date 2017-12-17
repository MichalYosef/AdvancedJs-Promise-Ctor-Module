function Order(orderObject)
{
    for (var key in orderObject)
    {
        this[key] = orderObject[key];
             
    }
}
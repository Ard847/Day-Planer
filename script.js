$(document).ready(function() {
    const p = $("#currentDay")
    const currentDay = moment().format('dddd, MMMM Do YYYY')
    p.text(currentDay)
    const nine=localStorage.getItem("9AM")
    const ten = localStorage.getItem("10AM")
    const eleven = localStorage.getItem("11AM")
    const twelve = localStorage.getItem("12PM")
    const one = localStorage.getItem("1PM")
    const two = localStorage.getItem("2PM")
    const three = localStorage.getItem("3PM")
    const four = localStorage.getItem("4PM")
    const five = localStorage.getItem("5PM")
    if(nine != null){
        $("#9").text(nine)
    } 
    if(ten != null){
        $("#10").text(ten)
    } 
    if(eleven != null){
        $("#11").text(eleven)
    } 
    if(twelve != null){
        $("#12").text(twelve)
    } 
    if(one != null){
        $("#13").text(one)
    } 
    if(two != null){
        $("#14").text(two)
    } 
    if(three != null){
        $("#15").text(three)
    } 
    if(four != null){
        $("#16").text(four)
    } 
    if(five != null){
        $("#17").text(five)
    } 

    const hour = [9,10,11,12,13,14,15,16,17]
    const hourP = $(".hour > p")
    const currentHour = moment().format("H")
    const button = $(".9")
    const button1 = $(".10")
    const button2 = $(".11")
    const button3 = $(".12")
    const button4 = $(".13")
    const button5 = $(".14")
    const button6 = $(".15")
    const button7 = $(".16")
    const button8 = $(".17")
    for(let i =0, x = 9; i < hour.length; i++,x++){
        if(hour[i] == currentHour){
            $("#" + x).attr("class","present")
            $("#" + x).addClass("col-md-10")
        }if(hour[i] > currentHour){
            $("#" + x).attr("class","future")
            $("#" + x).addClass("col-md-10")
        }
        if(hour[i] < currentHour){
            $("#" + x).attr("class","past")
            $("#" + x).addClass("col-md-10")
        } 
    }
    button.click(function(){
        localStorage.setItem("9AM",$("#9").val())
    })
    button1.click(function(){
        localStorage.setItem("10AM",$("#10").val())
    })
    button2.click(function(){
        localStorage.setItem("11AM",$("#11").val())
    })
    button3.click(function(){
        localStorage.setItem("12PM",$("#12").val())
    })
    button4.click(function(){
        localStorage.setItem("1PM",$("#13").val())
    })
    button5.click(function(){
        localStorage.setItem("2PM",$("#14").val())
    })
    button6.click(function(){
        localStorage.setItem("3PM",$("#15").val())
    })
    button7.click(function(){
        localStorage.setItem("4PM",$("#16").val())
    })
    button8.click(function(){
        localStorage.setItem("5PM",$("#17").val())
    })
   
});
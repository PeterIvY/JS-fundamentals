var i,
    j,
    numbersArray = [],
    desiredPosition=prompt('Dear user, please to imput the desired position to check for neighbours in a line of 250 numbers: ', 'Hint: values 0, 249 and greater will now be considered');
    desiredPosition=desiredPosition|0;
                        // let's generate some rand numbers from 0 to 50
function generateRandom() {
    for (i=0; i<250; i+=1){
        numbersArray[i]=(Math.random()*50)|0;
    }
}
generateRandom();

function checkNeighbours() {
    if (!(isNaN(desiredPosition))) {
        if (desiredPosition > 0 && desiredPosition < 249) {
            if ((numbersArray[desiredPosition] > numbersArray[desiredPosition - 1]) && (numbersArray[desiredPosition] > numbersArray[desiredPosition + 1])) {
                document.getElementById('input').innerHTML = numbersArray.join(',');
                document.getElementById('output').innerHTML = 'The number at position: ' + desiredPosition + ' is ineed greater than its neighbours.';
            }

        } else if (!(desiredPosition) || (desiredPosition === 249)) {
            switch (desiredPosition) {
                case 0:

                    if ((numbersArray[desiredPosition] > -1) && (numbersArray[desiredPosition] > numbersArray[desiredPosition + 1])) {
                        document.getElementById('input').innerHTML = numbersArray.join(',');
                        document.getElementById('output').innerHTML = 'The number at position: ' + desiredPosition + ' is ineed greater than position 1 and the number -1';
                    }
                    break;

                default:

                    if ((numbersArray[desiredPosition] > numbersArray[desiredPosition - 1]) && (numbersArray[desiredPosition] > -1)) {
                        document.getElementById('input').innerHTML = numbersArray.join(',');
                        document.getElementById('output').innerHTML = 'The number at position: ' + desiredPosition + ' is ineed greater than position 248 and -1.';
                    }
                    break;
            }
        }
        else {
            alert('No such position as: ' + desiredPosition + '!!! Program is now terminating with error! Press F5 to refresh.')
            document.getElementById('output').innerHTML = 'ERROR IN INPUT STREAM! REFRESH USING F5.';
        }
    }
}

checkNeighbours();
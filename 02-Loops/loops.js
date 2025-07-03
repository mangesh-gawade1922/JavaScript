//=================For Loop=====================//
let x;
for(x=0; x<=10; x++) {
    //console.log(x);
}


//=================While Loop=====================//
let y=1;
while(y<6) {
    //console.log(y);
    y++;
}
while(y<=6) {
    //console.log(y);
    y++;
}


// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i <= 3);

// let j = 15;
// do {
//   console.log( j );
//   j++;
// } while (j < 10);


//=================Break out of the Loop=====================//

// let z;
// for(z=0; z<10; z++) {
//     console.log(z);
//     if(z==5) {
//         break;
//     }
// }

//=================Skipping the loop cycle=====================//

let b;
for(b=0; b<10; b++) {
    if(b==5) {
        continue;
    }
    console.log(b);
}
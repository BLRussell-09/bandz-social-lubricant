// DATA --------------------------------------------
var Albums = 
[
  {
    albumName: "Slip n Slide",
    songList: ["Water or Silicon?", "It Puts The Lube On It's Skin", "Lubed Up And Let Down", "Emergency Lube", "Paula Dean's Butter Stash"],
    songDuration: ["2:34", "3:45", "4:56", "5:67", "3:56"],
    filePath: '/files/album1.html',
    divId: 'album1'
  },
  {
    albumName: "Living the Lube Life",
    songList: ["Lube 24/7", "Dinosaur Friendly", "Not For Consumption", "Mr. Rogers Secret", "Rehydrated Raisins"],
    songDuration: ["2:50", "3:35", "4:10", "5:57", "3:56"],
    filePath: '/files/album2.html',
    divId: 'album2'
  },
  {
    albumName: "Slip n Slide the II",
    songList: ["Gimme More", "Your Grandma Is My Best Friend", "Smells Like Lube", "Lube Is Love, Lube is Life", "Lube Cellar"],
    songDuration: ["2:37", "3:33", "4:16", "5:11", "3:40"],
    filePath: '/files/album3.html',
    divId: 'album3'
  },
  {
    albumName: "Confessions of a Lube Bottle",
    songList: ["The Things I've Seen", "The Things I've Done", "The Places I've Been", "Keep Refrigerated", "Not Jello"],
    songDuration: ["7:54", "5:42", "1:23", "6:46", "3:34"],
    filePath: '/files/album4.html',
    divId: 'album4'
  },
  {
    albumName: "The Final Bottle",
    songList: ["Fond Memories", "Lube Legacy", "Socially Awkward", "Puddle Of Lube", "Last Drop Of the Bottle"],
    songDuration: ["2:47", "3:38", "4:29", "5:18", "3:37"],
    filePath: '/files/album5.html',
    divId: 'album5'
  }
];

var merchPhotos = [
    'http://cdn.shopify.com/s/files/1/0714/1079/products/Clickbait_DadHat_Harvard_MockUp_600x.jpg?v=1499204416', 
    'https://image.spreadshirtmedia.com/image-server/v1/mp/products/P16001602MPC21750282PC21750283/views/1,width=800,height=800,appearanceId=129,backgroundColor=E8E8E8,version=1474453379/social-lubricant-women-s-fine-jersey-t-shirt.jpg', 
    'https://ih0.redbubble.net/image.3912281.9306/fc,300x300,teal.jpg', 
    'https://rlv.zcache.com/uncle_swifty_social_lubricant_t_shirt-ra3596948828c404b81c853e8ec0f296e_jyryf_324.jpg', 
    'https://i.pinimg.com/736x/89/68/fc/8968fcb6d31e1a02c4912d9cb49ff697--ex-boyfriend-awesome-shirts.jpg', 
    'https://pbs.twimg.com/media/DTIjwL-U0AAl4K0.jpg'
];

var profiles = [
    {
        Name: 'Drake',
        Instrument: 'Guitar',
        Hobby: 'Eat', 
        FavFood: 'Hamburger'
    },
    {
        Name: 'Barry',
        Instrument: 'Flute',
        Hobby: 'Sing', 
        FavFood: 'Pizza'
    },
    {
        Name: 'Juno',
        Instrument: 'Drums',
        Hobby: 'Running', 
        FavFood: 'Ham'
    },
    {
        Name: 'Corey',
        Instrument: 'Violin',
        Hobby: 'Protest', 
        FavFood: 'Beans'
    }
];

var albumPhotos = [
    'http://deow9bq0xqvbj.cloudfront.net/image-logo/1379207/logo-v1.png',
    'http://www.designformusic.com/wp-content/uploads/2017/07/hout-sauce-soundcheck-samples-500x500.jpg',
    'https://f4.bcbits.com/img/a2756769813_10.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91h8YsLwNtL._SY355_.jpg',
    'http://pinktentacle.com/images/s_nagaoka_23_large.jpg'
];

// End of DATA ---------------------------------------

// printToDom function--------------------------------
function printToDom(stringToPrint, divId)
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;

}

//Merch Cards

function domStringMaker(merchArray)
{
    var merchString = ""
        for (var idx = 0; idx < merchArray.length; idx++)
    {
      merchString += "<div>" + "<img src='" + merchPhotos[idx] + "'>" + "<div>";
    }
    printToDom(merchString, "merchandise");   
}
if (document.getElementById('merchandise')) {
    domStringMaker(merchPhotos);
}

// Album Cards -----------------------------------------

function albumCardBuilder(albumArray, coverArray) {
    var domString = '';
    for (var i = 0; i < albumArray.length; i++) {
        domString += '<article>';
        domString += '<a href="' + albumArray[i].filePath + '"><img src="' + coverArray[i] + '"></a>';
        domString += '<a href="' + albumArray[i].filePath + '"><h3>' + albumArray[i].albumName + '</h3></a>';
        domString += '</article>';
    }

    printToDom(domString, 'albumCards');
}

if (document.getElementById('albumCards')) {
    albumCardBuilder(Albums, albumPhotos);
}

// Album Songs -----------------------------------------

function albumSongBuilder(albumArray, albumIndex, albumDiv) {
    var domString = '';
    domString += '<div>';
    for (var i = 0; i < albumArray[albumIndex].songList.length; i++) {
        domString += '<p>' + albumArray[albumIndex].songList[i] + '<span> ' + albumArray[albumIndex].songDuration[i] + ' </span></p>';
    }
    domString += '<a href="/files/albums.html">Album Page</a>';
    domString += '</div>';
    printToDom(domString, albumDiv);
}

if (document.getElementById('album1')) {
    albumSongBuilder(Albums, 0, 'album1');
} else if (document.getElementById('album2')) {
    albumSongBuilder(Albums, 1, 'album2');
} else if (document.getElementById('album3')) {
    albumSongBuilder(Albums, 2, 'album3');
} else if (document.getElementById('album4')) {
    albumSongBuilder(Albums, 3, 'album4');
} else if (document.getElementById('album5')) {
    albumSongBuilder(Albums, 4, 'album5');
}

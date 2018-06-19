
var playlist ={
  
  Slowdive :'Alison'
  }
/*to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })*/
  function updatePlaylist ( playlist, artistName, SongTitle){
   playlist[artistName] = SongTitle
    return playlist
  }
 
   
 function removeFromPlaylist(playlist, artistName){

 
 delete playlist.slowdive;
 return playlist
   
  
  
}
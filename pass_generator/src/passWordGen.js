var Password = {
    _getRandomByte : function()
    {
      if(window.crypto && window.crypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
      }
      else if(window.msCrypto && window.msCrypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.msCrypto.getRandomValues(result);
        return result[0];
      }
      else 
    
    
      {
        return Math.floor(Math.random() * 256);
      }
    },
    
    generate : function(length,RegEx)
    {
      return Array.apply(null, {'length': length})
        .map(function()
        {
          var result;
          while(true) 
          {
            result = String.fromCharCode(this._getRandomByte());
            if(RegEx.test(result))
            {
              return result;
            }
          }        
        }, this)
        .join('');  
    }    
      
  };

  export default Password;
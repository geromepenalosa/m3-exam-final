fetch("https://api.covid19api.com/summary")
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code' + response.status);
                return;
            }
            response.json().then(function (data) {
                const globalData = data.Global;
                const globalDatas = [globalData.NewConfirmed, globalData.NewDeaths, globalData.NewRecovered, globalData.TotalConfirmed, globalData.TotalDeaths, globalData.TotalRecovered]
                const phData = data.Countries[136];
                const phDatas = [phData.Country, phData.NewConfirmed, phData.NewDeaths, phData.NewRecovered, phData.TotalConfirmed, phData.TotalDeaths, phData.TotalRecovered]

                document.getElementById('global-total-confirmed').innerHTML = globalDatas[3];
                document.getElementById('global-total-recovered').innerHTML = globalDatas[5];
                document.getElementById('global-total-deaths').innerHTML = globalDatas[4];
                document.getElementById('global-new-confirmed').innerHTML = globalDatas[0];
                document.getElementById('global-new-recovered').innerHTML = globalDatas[2];
                document.getElementById('global-new-deaths').innerHTML = globalDatas[1];

                document.getElementById('ph-total-confirmed').innerHTML = phDatas[3];
                document.getElementById('ph-total-recovered').innerHTML = phDatas[5];
                document.getElementById('ph-total-deaths').innerHTML = phDatas[4];
                document.getElementById('ph-new-confirmed').innerHTML = phDatas[0];
                document.getElementById('ph-new-recovered').innerHTML = phDatas[2];
                document.getElementById('ph-new-deaths').innerHTML = phDatas[1];

                console.log(globalDatas);
                console.log(phDatas);
                
            })

        }
    )
    .catch(function (err) {
        console.log(err + '404');
    });
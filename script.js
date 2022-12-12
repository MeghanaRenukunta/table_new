const roll=['21BD1A051L','21BD1A051Q','21BD1A050B','21BD1A051K','21BD1A050J']
const names=['Renukunta Meghana','Sreeja Reddy','Gunabhiram','Rakshith Kumar','Ruthwik'];
    var tdata=` <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Roll No.</th>
                            <th>Names</th>
                        <tr>
                    </thead>
                    <tbody>`
    for(let i=0;i<roll.length;i++)
    {
        tdata += `<tr>
            <td>${i + 1}</td>
            <td>${roll[i]}</td>
            <td>${names[i]}</td>
            </tr>`
    }
    var t="";
    function showTable(){
        document.getElementById('dat').innerHTML = tdata;
    }
    function hideTable(){
        document.getElementById('dat').innerHTML = t;
    }
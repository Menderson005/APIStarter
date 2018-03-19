fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
        .then((response) => response.text())
        .then((responseText) => {
            const match = responseText.match(/\?\((.*)\);/);
            if (! match) throw new Error('invalid JSONP response');
            return JSON.parse(match[1]).movies;
        })
        .catch((error) => {
            console.error(error);
        });

import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = 'data.json';
const data = moment().format()

const data = {
    date: date,
}
jsonfile.writeFile(path, data)

simpleGit().add([path]).commit(date, {'--date': date}).push();
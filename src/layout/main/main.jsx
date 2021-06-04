import Header from '../partials/header/header'
import './main.scss';
function Main() {

  return (
    <div className="container">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anna</td>
              <td>Pitt</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main;

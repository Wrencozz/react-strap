import React from 'react';
import { Badge, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function BodyComponent() {
    return( 
        <div style={{marginTop: "15rem"}}>
        <h1>
        Drby a novinky <Badge bg="dark">Top</Badge>
      </h1>
      Datábaze Skandálů SPSMB
      <Table striped bordered hover variant='dark' style={{marginTop: "2rem"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Skandál</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Vojtěch</td>
          <td>Vlachovský</td>
          <td>Jeho rasistické chování vypsalo odměnu na jeho hlavu</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Samotná</td>
          <td>Škola</td>
          <td>Mění okna v největším chladu a době výuky</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Paní </td>
          <td>Kiosková</td>
          <td>Je sice G ale enormní nárust cen</td>
        </tr>
        
      </tbody>
    </Table>
      </div>
    );
}
 export default BodyComponent;
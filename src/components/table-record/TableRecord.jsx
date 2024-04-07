import React from "react"
import './table-record.scss'
import edit from '../../assets/img/edit-icon.svg'
import del from '../../assets/img/delete-icon.svg'

function TableRecord( {recordData, onDelete, onEdit} ) {

  return (
    <div className="table-record" key={recordData.id}>
        {console.log('Rendered TableRecord')}
        <div className="table-record__record-info">
            <table>
                <tbody>
                    <tr>
                        <td>{recordData.date}</td>
                        <td>{recordData.situation}</td>
                        <td>{recordData.thoughts}</td>
                        <td>
                            {recordData.emotionsList}
                        </td>
                        <td>{recordData.bodyReaction}</td>
                        <td>{recordData.behavior}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="table-record__actions">
            {console.log('Record id ' + recordData.id)}
            <div className="table-record__edit-btn" onClick={() => onEdit(recordData.id)}>
                <img src={edit} alt="edit-icon" />
            </div>
            <div className="table-record__delete-btn" onClick={() => onDelete(recordData.id)}>
                <img src={del} alt="delete-icon" /> 
            </div>
        </div>
    </div>
  );
}

export default TableRecord;
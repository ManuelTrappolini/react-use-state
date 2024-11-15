export default function Card({ data }) {

    return (
        <div className="card">
            <div className="card-title">{data.title}</div>
            <div className="card-description">{data.description}</div>
        </div>
    )
}
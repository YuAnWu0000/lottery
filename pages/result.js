import store from "../redux/store";

export default function Result() {
  if (!store.getState().winningPerson) return (<div>尚未抽出中獎人</div>)
  return (
    <div>
      <div className="title">抽獎結果：{store.getState().winningPerson.name}</div>
      <div className="picture">
        {store.getState().winningPerson.name[0]}
      </div>
      <style jsx>{`
        .title {
          font-size: 40px;
        }
        .picture {
          width: 500px;
          height: 500px;
          background-color: red;
          color: white;
          font-size: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
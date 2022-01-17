import * as React from 'react';
import styled from '@emotion/native';
import firestore from '@react-native-firebase/firestore';

interface IPropsColoredProgressBar {
  current: number | undefined;
  dday: number;
  id: string | undefined;
}

interface IPropsWidth {
  per: string;
}

const Wrapper = styled.View``;

const ProgressInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DDay = styled.Text`
  font-weight: 500;
  color: #448800;
`;

const Percentage = styled.Text`
  font-weight: 500;
  color: #448800;
`;

const Bar = styled.View`
  height: 8px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin: 6px 0px 6px 0px;
`;

const Progress = styled.View`
  width: ${(props: IPropsWidth) => props.per};
  border-radius: 8px;
  height: 100%;
  background-color: #448800;
`;

const BottomCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CurrentSupporters = styled.Text`
  font-size: 11px;
`;

const Goals = styled.Text`
  font-size: 11px;
`;

export default function ProgressBar(props: IPropsColoredProgressBar) {
  const [goalCount, setGoalCount] = React.useState(0);
  const HomeCollection = firestore().collection('home');
  const docRef = HomeCollection.doc(props.id);

  React.useEffect(() => {
    docRef.get().then((doc) => setGoalCount(doc.data()?.goal));
  }, [docRef]);

  const current = props.current;
  const per = Math.floor((current / goalCount) * 100);

  return (
    <>
      <Wrapper>
        <ProgressInfo>
          <DDay>D-{props.dday}</DDay>
          <Percentage>{per}%</Percentage>
        </ProgressInfo>
        <Bar>
          <Progress per={`${per}%`} />
        </Bar>
        <BottomCount>
          <CurrentSupporters>{props.current}명</CurrentSupporters>
          <Goals>{goalCount}명</Goals>
        </BottomCount>
      </Wrapper>
    </>
  );
}

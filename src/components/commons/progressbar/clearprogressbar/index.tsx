import * as React from 'react';
import styled from '@emotion/native';
import firestore from '@react-native-firebase/firestore';
import { displayDDay } from '../../../../commons/libraries/utils';

const Wrapper = styled.View``;

const ProgressInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DDay = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
`;

const Percentage = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
`;

const Bar = styled.View`
  height: ${(props) => props.height};
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  margin: 3px 0px 3px 0px;
`;

const Progress = styled.View`
  width: ${(props) => props.per};
  border-radius: 8px;
  height: 100%;
  background-color: #fff;
`;

export default function ClearProgressBar(props) {
  const [goalCount, setGoalCount] = React.useState(0);
  const [getEnd, setGetEnd] = React.useState({});
  const HomeCollection = firestore().collection('home');
  const docRef = HomeCollection.doc(props.id);

  React.useEffect(() => {
    docRef.get().then((doc) => setGoalCount(doc.data()?.goal));
  }, []);

  docRef.get().then((doc) => setGetEnd({ ...doc.data()?.EndAt }));

  const current = props.current;

  const per = Math.floor((current / goalCount) * 100);

  const start = props.createdAt;
  const end = new Date(getEnd._seconds * 1000);

  return (
    <>
      <Wrapper>
        <ProgressInfo>
          <DDay>D-{displayDDay(start, end)}</DDay>
          <Percentage>{per}%</Percentage>
        </ProgressInfo>
        <Bar height={props.height}>
          <Progress per={`${per}%`}></Progress>
        </Bar>
      </Wrapper>
    </>
  );
}

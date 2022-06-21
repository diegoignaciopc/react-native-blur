import * as React from 'react';
import {
  add,
  Canvas,
  Circle,
  LinearGradient,
  vec,
  sub,
  Fill,
  useLoop,
  mix,
  BackdropFilter,
  Blur,
  useDerivedValue,
} from '@shopify/react-native-skia';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const c = vec(width / 2, (height / 2) * 1.5);
const r = c.x - 32;

export default function MyBlur() {
  const progress = useLoop({duration: 5000});

  const start = useDerivedValue(
    () => add(c, vec(0, mix(progress.current, r, r))),
    [progress],
  );

  const end = useDerivedValue(
    () => sub(c, vec(0, mix(progress.current, r, r / 2))),
    [progress],
  );

  const radius = useDerivedValue(
    () => mix(progress.current, r, r / 2),
    [progress],
  );

  return (
    <Canvas
      style={{width: '100%', height: '100%', position: 'absolute'}}
      width={width}
      height={height}>
      <Fill color={'#e5e8ef'} />
      <Circle r={radius} c={c}>
        <LinearGradient
          start={start}
          end={end}
          colors={['#CDC5FF', '#FFBBC2']}
        />
      </Circle>
      <BackdropFilter filter={<Blur blur={10} />}>
        <Fill color={'#DFE3E610'} />
      </BackdropFilter>
    </Canvas>
  );
}

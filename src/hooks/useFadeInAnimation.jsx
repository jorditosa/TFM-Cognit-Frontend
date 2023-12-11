import { useSpring } from '@react-spring/web';

const useBounceInAnimation = () => {
  const props = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    config: {
      duration: 500,
      easing: (t) => t,
    },
  });

  return props;
};

export default useBounceInAnimation;

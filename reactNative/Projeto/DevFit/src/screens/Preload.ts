import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

const Preload = (props: any) => {
  if (!props.name) {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
      }),
    );
  } else {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }

  return null;
};

const mapStateToProps = (state: {useReducer: {name: string}}) => {
  return {
    name: state.useReducer.name,
  };
};

export default connect(mapStateToProps)(Preload);

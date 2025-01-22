# React Native FlatList Key Issues

This repository demonstrates a common error in React Native's `FlatList` component: rendering issues caused by missing or duplicate `key` props.

## The Problem

The `FlatList` component requires a unique `key` prop for each item in its data array.  Without unique keys, React cannot efficiently update the list when changes occur. This can lead to incorrect rendering, missing items, or even crashes.

## The Solution

Ensure each item in your `FlatList`'s data array has a unique `key` prop.  This key should ideally be a stable, unique identifier for each item.  This could be a database ID, a UUID, or a combination of fields that guarantees uniqueness within the dataset.

## Setup

Clone the repository and run:
```bash
npm install
react-native run-android  //or react-native run-ios
```